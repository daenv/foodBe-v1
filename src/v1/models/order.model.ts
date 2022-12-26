import { Food, FoodSchema } from "./food.model";
import { OrderStatus } from "../constants/order_status";
import { Schema, Model, Types } from "mongoose";


export interface LatLng {
  lat: number;
  lng: number;
}

// @ts-ignore
export const LatLngSchema = new Schema<LatLng>({
  lat: { type: Number, required: true },
  lng: { type: Number, required: true }
});

export interface OrderItem {
  food: Food;
  price: number;
  quantity: number;
}

// @ts-ignore
export const OrderItem = new Schema<OrderItem>({
  food: { type: FoodSchema, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true }
});

export interface Order {
  id: string;
  items: OrderItem[];
  total: number;
  name: string;
  address: string;
  addressLatLng: LatLng;
  paymentId: string;
  status: OrderStatus;
  user: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export const OrderSchema = new Schema<Order>({
  id: { type: String, required: true },
  items: { type: [OrderItem], required: true },
  total: { type: Number, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  addressLatLng: { type: LatLngSchema, required: true },
  paymentId: { type: String },
  user: { type: Schema.Types.ObjectId, required: true }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});
// @ts-ignore
export const OrderModel = Model<Order>("Order", OrderSchema);