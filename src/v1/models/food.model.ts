const { Schema, model } = require("mongoose");
export interface Food {
  id: string;
  name: string;
  price: number;
  tags: string[];
  favorite: boolean;
  stars: number;
  imageUrl: string;
  origins: string[];
  cookingTime: number;
}

// @ts-ignore
export const FoodSchema = new Schema<Food>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  tags: { type: [String] },
  favorite: { type: Boolean, required: true },
  stars: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  origins: { type: [String], required: true },
  cookingTime: { type: Number, required: true }
}, {
  toJSON: {
    virtuals: true
  },
  toObject: { virtuals: true },
  timestamps: true
});

// @ts-ignore
export const FoodModel = model<Food>("Food", FoodSchema);

