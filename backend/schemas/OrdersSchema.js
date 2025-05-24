const { Schema } = require("mongoose");

const OrdersSchema = new Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
    mode: { type: String, required: true, enum: ["BUY", "SELL"] }, // Mode can be either "buy" or "sell"
  },
  { timestamps: true }
);

module.exports = { OrdersSchema };
