const { model } = require("mongoose");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsModel };
