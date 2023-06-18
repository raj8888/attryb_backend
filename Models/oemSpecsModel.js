const mongoose = require("mongoose");

const oemSpecsModelSchema = mongoose.Schema({
  nameOfModel: { required: true, type: String },
  yearOfModel: { required: true, type: String },
  newPriceOfVehicle: { required: true, type: Number },
  colors: { required: true, type: Array },
  mileage: { required: true, type: Number },
  power: { required: true, type: Number },
  maxSpeed: { required: true, type: Number },
  img:{required:true,type:String}
});

const oemSpecsModel = mongoose.model("oemspecs", oemSpecsModelSchema);

module.exports = { oemSpecsModel };
