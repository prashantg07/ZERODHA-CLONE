const { model } = require("mongoose");
const { OrdersSchema } = require("../schemas/OrdersSchema");

const OrdersModel = model("order", OrdersSchema);

module.exports = { OrdersModel };
