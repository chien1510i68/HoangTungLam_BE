module.exports = {
  mutipleMongooseToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },
  mongooseToObjcet: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
