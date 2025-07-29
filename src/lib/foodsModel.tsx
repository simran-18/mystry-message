import mongoose ,{Schema,Document,Model} from "mongoose";

export interface IFood extends Document {
  name: string;
  price: number;        
  img_path: string;
  description: string;
  resto_id: mongoose.Schema.Types.ObjectId; 
};

const foodModel: Schema<IFood> = new Schema({
  name: {
    type: String,
    required: [true, "Food name is required"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required"]
  },
  img_path: {
    type: String,
    required: [true, "Path is required"]
  },
  description: {
    type: String,
    required: [true, "Description is required"]
  }
});

export const Foods: Model<IFood> =
  mongoose.models.Foods || mongoose.model<IFood>("Foods", foodModel);