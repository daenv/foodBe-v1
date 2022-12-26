const { Schema, Model } = require("mongoose");

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  isAdmin: boolean;
}

// @ts-ignore
export const UserSchema = new Schema<User>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  isAdmin: { type: Boolean, required: true }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true
  },
  toObject: {
    virtuals: true
  }
});
// @ts-ignore
module.exports = Model<User>("User", UserSchema);