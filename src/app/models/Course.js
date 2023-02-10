const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, require: true },
    desc: { type: String, },
    image: { type: String, },
    slug: { type: String, slug: "name", unique: true },
    // videoID: { type: String, require: true },
    level: { type: String, },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);
