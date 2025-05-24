const { Schema } = require("mongoose");

const HoldingsSchema = new Schema(
  {
    name: { type: String, required: true },
    qty: { type: Number, required: true, min: 0 },
    avg: { type: Number, required: true, min: 0 },
    price: { type: Number, required: true, min: 0 },
    net: { type: String, required: true },
    day: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = { HoldingsSchema };
