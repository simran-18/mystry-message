import mongoose, { Schema, Document, Model } from "mongoose";

export interface IRestaurant extends Document {
  name: string;
}

const restaurantModel: Schema<IRestaurant> = new Schema({
  name: {
    type: String,
    required: [true, "Restaurant name is required"],
    trim: true,
  },
});

export const restaurantSchema: Model<IRestaurant> =
  mongoose.models.Restaurant || mongoose.model<IRestaurant>("Restaurant", restaurantModel);

