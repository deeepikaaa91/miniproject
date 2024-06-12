const mongoose = require("mongoose")

const TodoSchema = mongoose.Schema({
  name:  String,
  gender:String,
  mobile:Number
})

module.exports = mongoose.model("Todo", TodoSchema);